if [[ -z "${APP_ENVIRONMENT}" ]]; then
    echo "No App Env value provided! Using default configuration."
else
    echo "Current environment is ${APP_ENVIRONMENT}"
    mv -f ${APACHE_WWW}/html/pro/config/config.${APP_ENVIRONMENT}.js ${APACHE_WWW}/html/pro/config/config.js
fi

exec /usr/local/apache/run