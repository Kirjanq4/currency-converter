package app.currency.contollers;

import app.currency.entities.Currency;
import app.currency.repositories.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class CurrencyController {

    private final CurrencyRepository currencyRepository;

    @Autowired
    public CurrencyController(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @GetMapping("/currencies")
    public Iterable<Currency> getCurrencies() {
        return currencyRepository.findAll();
    }

}
