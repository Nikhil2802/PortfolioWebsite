import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/*
  Nothing currently renders a styled component: the redesign replaced them all.
  The collection is kept on purpose because the vertical-timeline components it
  served are a revert path the owner asked to keep open, and without it a
  restored styled component would flash unstyled on first paint. It is
  server-only, so it costs the client bundle nothing.
*/

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      /*
        The ground and ink are set inline, not only through Tailwind classes.
        Until the stylesheet arrives the body has no background and the browser
        default ink, which paints a white page with unreadable text for as long
        as the CSS takes to land. Inline styles ship inside the HTML itself, so
        the first paint is already dark. `color-scheme: dark` tells the browser
        to paint its own canvas, scrollbars and form controls dark before any
        of our CSS is parsed.
      */
      <Html lang="en" style={{ colorScheme: "dark", backgroundColor: "#07090D" }}>
        <Head>
          <meta name="color-scheme" content="dark" />
        </Head>
        <body
          className="bg-vacuum text-ink antialiased"
          style={{ backgroundColor: "#07090D", color: "#D6DDE4" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
