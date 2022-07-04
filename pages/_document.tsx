import {Html, Head, Main, NextScript} from "next/document"

const Document = () => {
    return (
        <Html lang="ja-JP">
            <Head>
            <meta name="description" content="Minecraft with Code Project によるもう一つのプロジェクト。C# プログラミングでマイクラ花火大会を実現するプロジェクトです。" />
            <link rel="icon" href="./images/favicon.webp" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};
export default Document;