package haris.demo.carquotations.backend.persistence.repository;

import haris.demo.carquotations.backend.persistence.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
