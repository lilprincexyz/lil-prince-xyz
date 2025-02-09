/*=============== LANGUAGE SWITCHER ===============*/
// document.querySelector('.languageSwitcher').addEventListener('change', function() {
//     const selectedOption = this.options[this.selectedIndex];
//     const href = selectedOption.getAttribute('data-href');
 
//     if (href) {
//        window.location.href = href;
//     } else {
//        console.error('No href attribute found for the selected option.');
//     }
//  });

const urls = {
    en: {
       index: 'index.html',
       about: 'about.html',
       work: 'work.html',
       contact: 'contact.html'
    },
    es: {
       index: 'index_es.html',
       about: 'about_es.html',
       work: 'work_es.html',
       contact: 'contact_es.html'
    },
    zh: {
       index: 'index_zh.html',
       about: 'about_zh.html',
       work: 'work_zh.html',
       contact: 'contact_zh.html'
    },
       // Add more languages as needed
};

// Function to set the language switcher based on the current page language
function setLanguageSwitcher() {
    const currentPage = window.location.pathname.split('/').pop();
    const pageLanguageMatch = currentPage.match(/_(zh|es|en)\.html$/);
    const currentLanguage = pageLanguageMatch ? pageLanguageMatch[1] : 'en';
 
    document.getElementById('languageSwitcher').value = currentLanguage;
    console.log('Current Language:', currentLanguage);
 }
 
 document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const currentPage = window.location.pathname.split('/').pop();
 
    console.log('Selected Language:', selectedLanguage);
    console.log('Current Page:', currentPage);
 
// Determine the page name without the language suffix
const pageName = currentPage.replace(/(_zh|_es|_en)?\.html$/, '');

console.log('Page Name:', pageName);

if (urls[selectedLanguage] && urls[selectedLanguage][pageName]) {
    window.location.href = urls[selectedLanguage][pageName];
} else {
    console.error('URL not found for selected language and page.');
}
 });
 
 // Set the language switcher based on the current page language when the page loads
 setLanguageSwitcher();



// document.getElementById('languageSwitcher').addEventListener('change', function() {
// const selectedLanguage = this.value;
// const currentPage = window.location.pathname.split('/').pop();

// console.log('Selected Language:', selectedLanguage);
// console.log('Current Page:', currentPage);

// // Determine the page name without the language suffix
// const pageName = currentPage.replace(/(_zh|_es|_en)?\.html$/, '');

// console.log('Page Name:', pageName);

// if (urls[selectedLanguage] && urls[selectedLanguage][pageName]) {
//     window.location.href = urls[selectedLanguage][pageName];
// } else {
//     console.error('URL not found for selected language and page.');
// }
// });

//  document.getElementById('languageSwitcher').addEventListener('change', function() {
//     const selectedLanguage = this.value;
//     const currentPage = window.location.pathname.split('/').pop();
 
//     if (currentPage.includes('index')) {
//        window.location.href = urls[selectedLanguage].index;
//     } else if (currentPage.includes('about')) {
//        window.location.href = urls[selectedLanguage].about;
//     } else if (currentPage.includes('work')) {
//        window.location.href = urls[selectedLanguage].work;
//     } else if (currentPage.includes('contact')) {
//        window.location.href = urls[selectedLanguage].contact;
//     }
//  });

// document.getElementById('language-select').addEventListener('change', function() {
//     var selectedLang = this.value;
//     var paragraphs = document.querySelectorAll('#content p');
    
//     paragraphs.forEach(function(p) {
//         if (p.getAttribute('data-lang') === selectedLang) {
//             p.style.display = 'block';
//         } else {
//             p.style.display = 'none';
//         }
//     });
// });