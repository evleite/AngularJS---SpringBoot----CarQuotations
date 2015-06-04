package haris.demo.carquotations.backend.ui.api;

import haris.demo.carquotations.backend.persistence.model.User;
import haris.demo.carquotations.backend.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void save(User user) {
        userRepository.save(user);
    }

    @RequestMapping(value ="/{username}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String username) {
        userRepository.delete(username);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User get(@PathVariable(value = "id") String id) {
        return userRepository.findOne(id);
    }
}
