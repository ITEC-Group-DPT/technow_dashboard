const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: "#d0d0d0",
        // backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/8/840/922/minimalism-geometry-line-art-shapes-wallpaper-preview.jpg")',
        // backgroundRepeat: 'repeat',
        // backgroundSize: 'content',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        width: { xs: '90%', md: "75%", lg: "50%" },
        height: '73vh',
        display: 'flex',
        border: "0.5px solid rgba(0,0,0,0.2)",
        borderRadius: "10px",
        // position: 'relative',
    },

    formContainerLeft: {
        flex: 1,
        padding: '50px',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        zIndex: 2,
    },

    input: {
        backgroundColor: '#eee',
        padding: '17px 15px',
        width: '100%',
        fontSize: '0.75rem',
        borderRadius: '10px',
        fontFamily: "'Montserrat', sans-serif",
    },

    redBorder: {
        border: "1px red solid",
    },

    errorMsg: {
        height: "20px",
        color: "red",
        fontSize: ".65rem",
        textAlign: "start",
        mb: 1,
    },

    title: {
        fontSize: '1.7rem',
        margin: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 1.2,
        marginBottom: 1,
    },

    subTitle: {
        fontFamily: "IBM Plex Serif, serif",
        fontSize: 12,
        textAlign: "center",
        marginBottom: "36px",
    },

    forgot: {
        fontSize: 12,
        color: "rgba(0,0,0,0.8)"
    },


    mainButton: {
        background: '#272727 !important',
        borderRadius: '20px',
        // fontFamily: 'Montserrat, sans-serif',
        fontSize: 13,
        fontWeight: 'bold',
        padding: '10px 30px',
        textTransform:"capitalize",
        // letter-spacing: 1px;
        // textTransform: 'uppercase',
    },

    overlayRight: {
        background: 'linear-gradient(307deg, rgb(0, 0, 0), rgb(100 100 100))',
        display: { xs: 'none', md: 'flex' },
        width: '50%',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        zIndex:2,
    },


    overlayTitle: {
        fontFamily: "Roboto Slab",
        fontWeight: 'bold',
        fontSize: '1.8rem'
    },

    overlaySubTitle: {
        fontSize: '16px',
        fontWeight: '100',
        lineHeight: '25px',
        px: 3,
        letterSpacing: '0.5px',
        margin: '20px 40px 30px',
        fontFamily: "'IBM Plex Serif', serif"
    },

    centerBox: {
        display: "flex",
        justifyContent: "center",
    },

    loadingIndicator: {
        color: "white",
    },

    showPWIcon: {
        fontSize: "1.2rem",
    },
    socialContainer: {
        margin: "20px 0 15px",
        display: "flex",
        justifyContent: "center",
    },

    socialLink: {
        border: '1px solid #DDDDDD',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        height: 40,
        width: 40,
        color: '#333',
        fontSize: 14,
        textDecoration: 'none',
    },
};

export default styles;
