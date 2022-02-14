function GlobalStyle() {
    return (
        <style global jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
            * {
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
                list-style: none;
            }

            body {
                overflow-x: hidden;
            }
        `}</style>
    );
}

export default function CustomApp({ Component, pageProps}) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}