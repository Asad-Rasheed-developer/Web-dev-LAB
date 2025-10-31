$(function () {
  function markInvalid($el) {
    $el.removeClass("is-valid").addClass("is-invalid");
    $el.next(".invalid-feedback").show();
  }
  function markValid($el) {
    $el.removeClass("is-invalid").addClass("is-valid");
    $el.next(".invalid-feedback").hide();
  }

  function isEmail(str) {
    return /.+@.+\..+/.test(str);
  }
  function isDigits(str) {
    return /^\d+$/.test(str);
  }

  function validateField(id) {
    var ok = true;
    var $el = $(id);
    var val = $el.val() ? String($el.val()).trim() : "";

    if (id === "#fullName") {
      ok = val.length >= 3;
    }
    if (id === "#email") {
      ok = isEmail(val);
    }
    if (id === "#phone") {
      ok = isDigits(val) && val.length >= 10;
    }
    if (id === "#address") {
      ok = val.length > 0;
    }
    if (id === "#city") {
      ok = val.length > 0;
    }
    if (id === "#postalCode") {
      ok = isDigits(val) && val.length >= 4 && val.length <= 6;
    }
    if (id === "#country") {
      ok = val.length > 0;
    }

    var cardSelected = $("#payCard").is(":checked");
    if (cardSelected) {
      if (id === "#cardName") {
        ok = val.length > 0;
      }
      if (id === "#cardNumber") {
        var digits = val.replace(/\s+/g, "");
        ok = isDigits(digits) && digits.length >= 12 && digits.length <= 19;
      }
      if (id === "#expiry") {
        ok = /^\d{2}\/\d{2}$/.test(val);
      }
      if (id === "#cvv") {
        ok = isDigits(val) && (val.length === 3 || val.length === 4);
      }
    } else {
      if (
        id === "#cardName" ||
        id === "#cardNumber" ||
        id === "#expiry" ||
        id === "#cvv"
      ) {
        $el.removeClass("is-valid is-invalid");
        $el.next(".invalid-feedback").hide();
        return true;
      }
    }

    if (ok) {
      markValid($el);
    } else {
      markInvalid($el);
    }
    return ok;
  }

  $("#checkoutForm").on("submit", function (e) {
    var formOk = true;
    var ids = [
      "#fullName",
      "#email",
      "#phone",
      "#address",
      "#city",
      "#postalCode",
      "#country",
      "#cardName",
      "#cardNumber",
      "#expiry",
      "#cvv",
    ];
    var paymentChosen = $("input[name='paymentMethod']:checked").length > 0;
    if (!paymentChosen) {
      $("#paymentMethodFeedback").show();
      $("input[name='paymentMethod']").addClass("is-invalid");
      formOk = false;
    } else {
      $("#paymentMethodFeedback").hide();
      $("input[name='paymentMethod']").removeClass("is-invalid");
    }
    for (var i = 0; i < ids.length; i++) {
      var ok = validateField(ids[i]);
      if (!ok) formOk = false;
    }
    var termsOk = $("#termsCheck").is(":checked");
    if (!termsOk) {
      $("#termsCheck").addClass("is-invalid");
      $("#termsCheck").nextAll(".invalid-feedback").first().show();
      formOk = false;
    } else {
      $("#termsCheck").removeClass("is-invalid").addClass("is-valid");
      $("#termsCheck").nextAll(".invalid-feedback").first().hide();
    }
    if (!formOk) {
      e.preventDefault();
      var $firstError = $(this).find(".is-invalid:visible").first();
      if ($firstError.length) {
        $("html,body").animate(
          { scrollTop: $firstError.offset().top - 80 },
          500
        );
        $firstError.focus();
      }
    }
  });
  $("#checkoutForm input, #checkoutForm select").on(
    "input change",
    function () {
      var id = "#" + $(this).attr("id");
      validateField(id);
      if ($(this).attr("name") === "paymentMethod") {
        validateField("#cardName");
        validateField("#cardNumber");
        validateField("#expiry");
        validateField("#cvv");
      }
    }
  );
});
