package app.currency.contollers;


import app.currency.entities.History;
import app.currency.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HistoryController {

    private final HistoryRepository historyRepository;

    @Autowired
    public HistoryController(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @GetMapping("/history")
    public Iterable<History> getHistory() {
        return historyRepository.findAll();
    }

    @PostMapping("/history")
    void addHistory(@RequestBody History history) {
        historyRepository.save(history);
    }


}
