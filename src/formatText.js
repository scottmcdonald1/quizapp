export function formatText(str) {
    return str
    .replaceAll(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')
    .replaceAll(/\[/g, "")
    .replaceAll(/\]/g,"")
    .replaceAll(/&quot;/g,'"')
    .replaceAll(/&Eacute;/g, 'É')
    .replaceAll(/&oacute;/g, "o")
    .replaceAll(/&#039;/g, "'")
    .replaceAll(/&rsquo;/g, "'")
    .replaceAll(/&lrm;/g, "")
    .replaceAll(/&amp;/g, "&")
    .replaceAll(/&shy;/g, "");
}