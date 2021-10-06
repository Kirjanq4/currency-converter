package app.currency.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String firstCurrency;
    private String secondCurrency;
    private double amount;
    private double result;
    private double rate;
    private LocalDateTime date;

    public History(String firstCurrency, String secondCurrency, double amount, double result, double rate, LocalDateTime date) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = amount;
        this.result = result;
        this.rate = rate;
        this.date = date;
    }

    public History() {
    }
}
