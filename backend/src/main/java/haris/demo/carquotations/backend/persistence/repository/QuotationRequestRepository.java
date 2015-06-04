package haris.demo.carquotations.backend.persistence.repository;


import haris.demo.carquotations.backend.persistence.model.QuotationRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuotationRequestRepository extends MongoRepository<QuotationRequest, String> {

    List<QuotationRequest> findTop2ByOrderByCreatedOnDesc();

    List<QuotationRequest> findTop2ByUserOrderByCreatedOnDesc(@Param("user") String user);

    List<QuotationRequest> findByUser(@Param("user") String user);
}
