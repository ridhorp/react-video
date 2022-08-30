import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    backgroundColor: "#ebebeb",
  },
  title: {
    fontSize: "16pt",
  },
  section: {
    margin: 4,
    padding: 8,
    fontSize: "12pt",
  },
});

function pdfText() {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <View style={style.section}>
          <Text style={style.title}>Parodi Hujan</Text>
          <View style={style.section}>
            <Text>Tak ada yang lebih basah</Text>
            <Text>dari hujan setelah oktober. Banjir</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function PdfReader() {
  return (
    <div style={{ height: "100%" }}>
      <BlobProvider document={pdfText()}>
        {({ url }) => (
          <iframe src={url} style={{ width: "100%", height: "100%" }} />
        )}
      </BlobProvider>
    </div>
  );
}
