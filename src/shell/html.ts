const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>${body}</body>
    <script src="js/client.js" defer></script>
  </html>
`;

export default html;
