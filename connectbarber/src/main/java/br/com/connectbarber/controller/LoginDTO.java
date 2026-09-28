package br.com.connectbarber.controller;

class LoginDTO {
    private String email;
    private String senha;
    private String tipo; // "cliente" ou "barbearia"

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
}

class AgendamentoRequest {
    private String data;
    private String hora;
    private String servico;
    private Long clienteId;

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }
    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }
    public String getServico() { return servico; }
    public void setServico(String servico) { this.servico = servico; }
    public Long getClienteId() { return clienteId; }
    public void setClienteId(Long clienteId) { this.clienteId = clienteId; }
}
