// Tab switching
$('.tab a').on('click', function (e) {
  e.preventDefault();
  const target = $(this).attr('href');

  $('.tab').removeClass('active');
  $(this).parent().addClass('active');

  $('.tab-pane').addClass('hidden');
  $(target).removeClass('hidden');
});

// Default tab based on URL hash
const hash = window.location.hash;
if (hash === '#login' || hash === '#signup') {
  $(`.tab a[href="${hash}"]`).trigger('click');
} else {
  $('.tab a[href="#signup"]').trigger('click');
}

// Signup Form Submit
$('#signup-form').on('submit', function (e) {
  e.preventDefault();

  const data = {
    username: $('input[name="signup-username"]').val(),
    email: $('input[name="signup-email"]').val(),
    password: $('input[name="signup-password"]').val(),
    account_type: $('select[name="signup-type"]').val()
  };

  $.post('/api/signup', data, function (res) {
    alert(res.message);
    if (res.success) {
      window.location.hash = '#login';
      $(`.tab a[href="#login"]`).trigger('click');
    }
  });
});


// Login Form Submit
$('#login-form').on('submit', function (e) {
  e.preventDefault();

  const data = {
    email: $('input[name="login-identifier"]').val(),
    password: $('input[name="login-password"]').val()
  };

  $.post('/api/login', data, function (res) {
    alert(res.message);
    if (res.success) {
      const user = res.user;
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect based on account type
      switch (user.account_type) {
        case 'Individual':
          window.location.href = "../dashboard/individual.html";
          break;
        case 'Business':
          window.location.href = "../dashboard/business.html";
          break;
        case 'Lawyer':
          window.location.href = "../dashboard/lawyer.html";
          break;
        case 'Law Firm':
          window.location.href = "../dashboard/lawfirm.html";
          break;
        default:
          alert("Unknown account type. Please contact support.");
          // Optionally redirect to login page
          window.location.href = "../login/index.html";
      }
    }
  });
});

