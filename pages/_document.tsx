import {Html, Head, Main, NextScript} from "next/document"

const Document = () => {
    return (
        <Html lang="ja-JP">
            <Head>
            <meta name="description" content="hoge" />
            <link rel="icon" href="./images/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
export default Document;