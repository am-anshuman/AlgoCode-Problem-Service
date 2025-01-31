const marked = require('marked');
const sanitizeHtmlLib = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    // 2. Sanitize html
    const sanitizedHtml = sanitizeHtmlLib(convertedHtml, {
        allowedTags: sanitizeHtmlLib.defaults.allowedTags
    });

    // 3. Convert the sanitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;