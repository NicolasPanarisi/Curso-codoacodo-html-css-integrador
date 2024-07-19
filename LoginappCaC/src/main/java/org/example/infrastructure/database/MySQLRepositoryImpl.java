package org.example.infrastructure.database;

import org.example.application.adapters.IRepository;
import org.example.domain.models.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLRepositoryImpl implements IRepository {
   private Connection conexion;

    public MySQLRepositoryImpl() {
        this.conexion = DatabaseConnection.getConnection();
    }

    @Override
    public void saveUser(Usuario user) {

        String sql = "INSERT INTO users (email, password) VALUES (?,?)";
        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);
            preparador.setString(1, user.getEmail());
            preparador.setString(2, user.getPassword());
            preparador.executeUpdate();
            preparador.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public Usuario findbyEmail(String Email) {
        String sql = "SELECT * FROM users WHERE email = ?";
        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);
            preparador.setString(1, Email);
            ResultSet tablaVirtual = preparador.executeQuery();
            if (tablaVirtual.next()) {
                Usuario usuario = new Usuario();
                usuario.setId(tablaVirtual.getInt("id"));
                usuario.setEmail(tablaVirtual.getString("email"));
                usuario.setPassword(tablaVirtual.getString("password"));
                return usuario;
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }


        return null;
    }
}
