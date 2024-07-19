package org.example.application.services;

import org.example.application.adapters.IRepository;
import org.example.domain.models.Usuario;
import org.example.infrastructure.database.MySQLRepositoryImpl;

public class UsuarioService implements IRepository {

    private final IRepository repository = new MySQLRepositoryImpl();


    @Override
    public void saveUser(Usuario user) {
        repository.saveUser(user);
    }

    @Override
    public Usuario findbyEmail(String Email) {
        return repository.findbyEmail(Email);
    }
}
