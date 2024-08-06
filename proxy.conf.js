module.exports = {
    "/api": {
        target: "https://dev.pro.net:443",
        changeOrigin: true,
        secure: false,
        headers: { Origin: "https://dev.pro.net"}
    }
}