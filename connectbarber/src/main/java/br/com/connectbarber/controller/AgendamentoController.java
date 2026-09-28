package br.com.connectbarber.controller;

import br.com.connectbarber.model.Agendamento;
import br.com.connectbarber.model.Cliente;
import br.com.connectbarber.repository.AgendamentoRepository;
import br.com.connectbarber.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Agendamento> listarTodos() {
        return agendamentoRepository.findAll();
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Agendamento> listarPorCliente(@PathVariable Long clienteId) {
        return agendamentoRepository.findByClienteId(clienteId);
    }

    @PostMapping
    public ResponseEntity<?> agendar(@RequestBody AgendamentoRequest req) {
        Cliente cliente = clienteRepository.findById(req.getClienteId())
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Agendamento agendamento = new Agendamento(
                LocalDate.parse(req.getData()),
                LocalTime.parse(req.getHora()),
                req.getServico(),
                cliente
        );

        Agendamento salvo = agendamentoRepository.save(agendamento);
        return ResponseEntity.ok(salvo);
    }
}
