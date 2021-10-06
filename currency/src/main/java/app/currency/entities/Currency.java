package app.currency.entities;

import app.currency.enums.CurrencyName;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter

public class Currency {

    public Currency() {}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String code;

    private double rate;


    public Currency(String name,String code, double rate) {
        this.name = name;
        this.code = code;
        this.rate = rate;

    }


    @Override
    public String toString() {
        return "Currency{" +
                "id=" + id +
                ", currency='" + code + '\'' +
                ", rate='" + rate + '\'' +
                '}';
    }
}
