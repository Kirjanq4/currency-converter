package app.currency.repositories;

import app.currency.entities.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {
    Currency findByCode(String currency);
}
