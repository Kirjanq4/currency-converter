package app.currency.enums;

public enum CurrencyName {
    USD("US Dollar"), EUR("Euro"), JPY("Japanese yen"), BGN("Bulgarian lev"), CZK("Czech koruna"), DKK("Danish krone"),
    GBP("Pound sterling"), HUF("Hungarian foint"), PLN("Polish zloty"), RON("Romanian leu"), SEK("Swedish krone"),
    CHF("Swiss franc"), ISK("Icelandic krona"), NOK("Norwegian krone"), HRK("Croatian kuna"), RUB("Russian ruble"),
    TRY("Turkish lira"), AUD("Australian dollar"), BRL("Brazilian real"), CAD("Canadian dollar"), CNY("Chinese yuan"),
    HKD("Hong Kong dollar"), IDR("Indonesian rupiah"), ILS("Israeli new shekel"), INR("Indian rupee"), KRW("South Korean won"),
    MXN("Mexican peso"), MYR("Malaysian ringgit"), NZD("New Zealand dollar"), PHP("Philippine peso"), SGD("Singapore dollar"),
    THB("Thai baht"), ZAR("South African rand"),
    ;

    private final String name;

    CurrencyName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
