package org.example.infrastructure.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.application.services.UsuarioService;
import org.example.domain.models.Usuario;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;

@WebServlet ("/users")
public class UsuarioController extends HttpServlet {
private ObjectMapper mapper;
private UsuarioService service;

    public UsuarioController() {
        this.mapper = new ObjectMapper();
        this.service = new UsuarioService();
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
            configureCorsHeaders(resp);
    }
    private void configureCorsHeaders(@org.jetbrains.annotations.NotNull HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        resp.setHeader("Access-Control-Allow-Headers","content-type");
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        configureCorsHeaders(resp);
        Usuario usuario = mapper.readValue(req.getInputStream(), Usuario.class);
        service.saveUser(usuario);
        resp.setStatus(200);

    }



    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        configureCorsHeaders(resp);
        String email = req.getParameter("email");
        if(email != null) {
           Usuario usuario = service.findbyEmail(email);
            if(usuario != null) {
                resp.setStatus(200);
                resp.setContentType("application/json");
                resp.setCharacterEncoding("UTF-8");

                resp.getWriter().write(mapper.writeValueAsString(usuario));

            }else {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
                resp.getWriter().write("Usuario no encontrado");
            }
        }
    }
}
