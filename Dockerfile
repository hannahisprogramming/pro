FROM 

WORKDIR ${APACHE_WWW}/html
COPY ["dist/pro", ",htaccess", "./"]

USER root
RUN chmod -R g+w ./

WORKDIR /apache-apps
COPY --chmod=550 bin/start.sh ./

RUN sed -e 's/AllowOverride None/AllowOverride All/g' -i /${APACHE_HTTPD}/conf/httpd.conf

EXPOSE 23000
ENTRYPOINT /apache-apps/start.sh