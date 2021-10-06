FROM postgres:12
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB cur_exchange_db
VOLUME [“/vol]
COPY ce_db.sql /docker-entrypoint-initdb.d/
