package org.example.application.adapters;

import org.example.domain.models.Usuario;

public interface IRepository {
    void saveUser(Usuario user);
    Usuario findbyEmail (String Email);

}
