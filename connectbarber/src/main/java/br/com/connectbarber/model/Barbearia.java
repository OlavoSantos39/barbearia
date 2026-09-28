package br.com.connectbarber.model;

import jakarta.persistence.Entity;

@Entity
public class Barbearia extends Usuario {

    private String nome;
    private String cnpj;

    public Barbearia() {}

    public Barbearia(String email, String nome, String cnpj, String senha) {
        super(email, senha, null);
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCnpj() { return cnpj; }
    public void setCnpj(String cnpj) { this.cnpj = cnpj; }
}
