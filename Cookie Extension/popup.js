document.addEventListener('DOMContentLoaded', function() {
    const cookieContainer = document.getElementById('cookie-value');
    const copyButton = document.getElementById('copy-button');
    const statusMessage = document.getElementById('status-message');
    const domainButtons = document.querySelectorAll('.domain-btn');
    const siteLink = document.getElementById('site-link');
    
    let currentDomain = 'csgoroll.com';
    let sessionCookie = null;
    
    fetchSessionCookie();
    
    siteLink.addEventListener('click', function(e) {
      e.preventDefault();
      chrome.tabs.create({ url: 'https://www.rollwithdraw.com/' });
    });
    
    domainButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
        
        domainButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentDomain = this.dataset.domain;
        
        cookieContainer.style.opacity = '0.5';
        setTimeout(() => {
          fetchSessionCookie();
          cookieContainer.style.opacity = '1';
        }, 200);
      });
    });
    
    copyButton.addEventListener('click', function() {
      if (!sessionCookie) return;
      
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      navigator.clipboard.writeText(sessionCookie).then(() => {
        statusMessage.textContent = 'Cookie copied to clipboard!';
        statusMessage.classList.add('success');
        cookieContainer.classList.add('highlight');
        
        setTimeout(() => {
          statusMessage.textContent = '';
          statusMessage.classList.remove('success');
          cookieContainer.classList.remove('highlight');
        }, 2000);
      }).catch(err => {
        statusMessage.textContent = 'Failed to copy: ' + err;
        statusMessage.style.color = '#ff6b6b';
        setTimeout(() => {
          statusMessage.textContent = '';
          statusMessage.style.color = '';
        }, 3000);
      });
    });
    
    function fetchSessionCookie() {
      chrome.cookies.getAll({ domain: currentDomain }, function(cookies) {
        sessionCookie = null;
        
        for (let cookie of cookies) {
          if (cookie.name === 'session') {
            sessionCookie = cookie.value;
            break;
          }
        }
        
        if (sessionCookie) {
          cookieContainer.style.opacity = '0';
          setTimeout(() => {
            cookieContainer.innerHTML = sessionCookie;
            cookieContainer.style.opacity = '1';
            copyButton.disabled = false;
            
            copyButton.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
              copyButton.style.animation = '';
            }, 600);
          }, 100);
        } else {
          cookieContainer.style.opacity = '0';
          setTimeout(() => {
            cookieContainer.innerHTML = '<div class="empty-message">No session cookie found for ' + currentDomain + '. Please visit the site first.</div>';
            cookieContainer.style.opacity = '1';
            copyButton.disabled = true;
          }, 100);
        }
      });
    }
  });