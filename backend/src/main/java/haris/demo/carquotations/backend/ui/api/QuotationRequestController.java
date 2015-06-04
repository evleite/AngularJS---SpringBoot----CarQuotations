package haris.demo.carquotations.backend.ui.api;

import haris.demo.carquotations.backend.persistence.model.QuotationRequest;
import haris.demo.carquotations.backend.persistence.repository.QuotationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/quotationRequests")
public class QuotationRequestController {

    @Autowired
    QuotationRequestRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<QuotationRequest> getAll() {
        return repository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void save(QuotationRequest quotationRequest) {
        repository.save(quotationRequest);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        repository.delete(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public QuotationRequest getOne(@PathVariable String id) {
        return repository.findOne(id);
    }

    @RequestMapping(value = "/findByUser/{username}", method = RequestMethod.GET)
    public List<QuotationRequest> findByUsername(@PathVariable String username) {
        return repository.findByUser(username);
    }

}
