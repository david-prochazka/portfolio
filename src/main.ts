const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });

function splitTextIntoLetters(text: string): string[] {
    const letters = Array.from(segmenter.segment(text));
    return letters.map(segment => `<span class="letter">${segment.segment}</span>`);
}

const links = document.querySelectorAll<HTMLElement>('.link');
links.forEach(el => {
    const linkText = el.textContent || '';
    const letterSpans = splitTextIntoLetters(linkText);
    el.innerHTML = letterSpans.join('');
});

const yearsExperienceElement = document.getElementById('years-experience');
if (yearsExperienceElement) {
    const yearsExperience = Date.now() - new Date('2021-06').getTime();
    yearsExperienceElement.textContent = Math.floor(yearsExperience / (1000 * 60 * 60 * 24 * 365)).toString();
}
