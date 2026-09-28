package br.com.connectbarber.model;

import jakarta.persistence.Entity;

@Entity
public class Cliente extends Usuario {

    private String usuario;

    public Cliente() {}

    public Cliente(String email, String usuario, String telefone, String senha) {
        super(email, senha, telefone);
        this.usuario = usuario;
    }

    public String getUsuario() { return usuario; }
    public void setUsuario(String usuario) { this.usuario = usuario; }
}