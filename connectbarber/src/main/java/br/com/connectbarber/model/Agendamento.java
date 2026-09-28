package br.com.connectbarber.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate data;
    private LocalTime hora;
    private String servico;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    public Agendamento() {}

    public Agendamento(LocalDate data, LocalTime hora, String servico, Cliente cliente) {
        this.data = data;
        this.hora = hora;
        this.servico = servico;
        this.cliente = cliente;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getData() { return data; }
    public void setData(LocalDate data) { this.data = data; }

    public LocalTime getHora() { return hora; }
    public void setHora(LocalTime hora) { this.hora = hora; }

    public String getServico() { return servico; }
    public void setServico(String servico) { this.servico = servico; }

    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }
}
