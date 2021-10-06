--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Debian 12.8-1.pgdg110+1)
-- Dumped by pg_dump version 12.8 (Debian 12.8-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: currency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.currency (
    id bigint NOT NULL,
    code character varying(255),
    name character varying(255),
    rate double precision NOT NULL
);


ALTER TABLE public.currency OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.history (
    id bigint NOT NULL,
    amount double precision NOT NULL,
    date timestamp without time zone,
    first_currency character varying(255),
    rate double precision NOT NULL,
    result double precision NOT NULL,
    second_currency character varying(255)
);


ALTER TABLE public.history OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    password character varying(255),
    user_name character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: currency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.currency (id, code, name, rate) FROM stdin;
2	USD	US Dollar	1.1542
3	JPY	Japanese yen	128.52
4	BGN	Bulgarian lev	1.9558
5	CZK	Czech koruna	25.415
6	DKK	Danish krone	7.4398
7	GBP	Pound sterling	0.8497
8	HUF	Hungarian foint	359.43
9	PLN	Polish zloty	4.5925
10	RON	Romanian leu	4.9458
11	SEK	Swedish krone	10.1628
12	CHF	Swiss franc	1.0715
13	ISK	Icelandic krona	148.6
14	NOK	Norwegian krone	9.923
15	HRK	Croatian kuna	7.508
16	RUB	Russian ruble	83.6242
17	TRY	Turkish lira	10.2802
18	AUD	Australian dollar	1.5913
19	BRL	Brazilian real	6.3584
20	CAD	Canadian dollar	1.4575
21	CNY	Chinese yuan	7.4407
22	HKD	Hong Kong dollar	8.9876
23	IDR	Indonesian rupiah	16487.75
24	ILS	Israeli new shekel	3.7452
25	INR	Indian rupee	86.438
26	KRW	South Korean won	1379.91
27	MXN	Mexican peso	23.9641
28	MYR	Malaysian ringgit	4.8297
29	NZD	New Zealand dollar	1.6728
30	PHP	Philippine peso	58.804
31	SGD	Singapore dollar	1.5712
32	THB	Thai baht	39.116
33	ZAR	South African rand	17.4561
34	EUR	Euro	1
\.


--
-- Data for Name: history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.history (id, amount, date, first_currency, rate, result, second_currency) FROM stdin;
35	100	2021-10-06 15:24:21.556	US Dollar	111.35	11134.985	Japanese yen
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, password, user_name) FROM stdin;
1	$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG	admin
\.


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 35, true);


--
-- Name: currency currency_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currency
    ADD CONSTRAINT currency_pkey PRIMARY KEY (id);


--
-- Name: history history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

