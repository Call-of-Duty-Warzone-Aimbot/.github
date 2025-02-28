
document.addEventListener('DOMContentLoaded', () => {
    const faqData = [
        {
            question: "Is the aimbot safe to use?",
            answer: "Yes, our aimbot is designed to be safe and undetectable by anti-cheat systems."
        },
        {
            question: "Does the aimbot work on PC and console?",
            answer: "Currently, our aimbot is optimized for PC users. Console versions may be available in the future."
        },
        {
            question: "What if I have technical issues?",
            answer: "Our support team is available 24/7 to assist with any technical problems."
        }
    ];

    const faqContainer = document.querySelector('.faq-container');
    
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">${item.question}</div>
            <div class="faq-answer">${item.answer}</div>
        `;
        faqContainer.appendChild(faqItem);
    });
});
