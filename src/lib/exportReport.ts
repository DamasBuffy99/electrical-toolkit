export type ReportRow = { label: string; value: string };
export type ReportSection = { heading?: string; rows: ReportRow[] };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function buildReportHtml(title: string, subtitle: string | undefined, sections: ReportSection[]): string {
  const date = new Date().toLocaleString('fr-FR');
  const sectionsHtml = sections
    .map((s) => {
      const rowsHtml = s.rows
        .map(
          (r) => `<tr><td class="label">${escapeHtml(r.label)}</td><td class="value">${escapeHtml(r.value)}</td></tr>`
        )
        .join('');
      return `
        ${s.heading ? `<h2>${escapeHtml(s.heading)}</h2>` : ''}
        <table>${rowsHtml}</table>
      `;
    })
    .join('');

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, Helvetica, Arial, sans-serif; color: #161c19; padding: 32px; }
          .brand { font-size: 13px; color: #1e3a8a; font-weight: 700; margin-bottom: 4px; }
          h1 { font-size: 22px; margin: 0 0 4px 0; }
          .subtitle { font-size: 13px; color: #5b655f; margin-bottom: 4px; }
          .date { font-size: 11px; color: #8a938d; margin-bottom: 20px; }
          h2 { font-size: 14px; margin: 20px 0 8px 0; color: #1e3a8a; border-bottom: 1px solid #e2e6ef; padding-bottom: 4px; }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 6px 4px; border-bottom: 1px solid #eceeed; font-size: 13px; }
          td.label { color: #5b655f; }
          td.value { text-align: right; font-weight: 600; color: #161c19; }
          .footer { margin-top: 32px; font-size: 10px; color: #8a938d; text-align: center; }
        </style>
      </head>
      <body>
        <div class="brand">⚡ Outils Électriques</div>
        <h1>${escapeHtml(title)}</h1>
        ${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ''}
        <div class="date">Généré le ${date}</div>
        ${sectionsHtml}
        <div class="footer">Document généré automatiquement — à vérifier avant usage professionnel.</div>
      </body>
    </html>
  `;
}

export async function exportReport(title: string, subtitle: string | undefined, sections: ReportSection[]): Promise<void> {
  const html = buildReportHtml(title, subtitle, sections);
  const Print = await import('expo-print');
  await Print.printAsync({ html });
}
