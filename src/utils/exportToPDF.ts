import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ExportData {
  [key: string]: string | number;
}

export const exportToPDF = (data: ExportData[], columns: string[], title: string) => {
  const doc = new jsPDF();
  
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.text(`Дата экспорта: ${new Date().toLocaleDateString()}`, 14, 32);
  
  const tableData = data.map(row => 
    columns.map(col => row[col.toLowerCase()] || row[col] || '')
  );
  
  autoTable(doc, {
    head: [columns],
    body: tableData,
    startY: 40,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [79, 70, 229] },
  });
  
  doc.save(`${title.toLowerCase().replace(/\s/g, '_')}_${Date.now()}.pdf`);
};