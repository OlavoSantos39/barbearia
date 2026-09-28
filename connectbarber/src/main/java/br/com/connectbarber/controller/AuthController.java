package br.com.connectbarber.controller;

import br.com.connectbarber.model.Barbearia;
import br.com.connectbarber.model.Cliente;
import br.com.connectbarber.repository.BarbeariaRepository;
import br.com.connectbarber.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private BarbeariaRepository barbeariaRepository;

    @PostMapping("/cadastro/cliente")
    public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente cliente) {
        if (clienteRepository.findByEmail(cliente.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("E-mail já cadastrado!");
        }
        Cliente novo = clienteRepository.save(cliente);
        return ResponseEntity.ok(novo);
    }

    @PostMapping("/cadastro/barbearia")
    public ResponseEntity<?> cadastrarBarbearia(@RequestBody Barbearia barbearia) {
        if (barbeariaRepository.findByEmail(barbearia.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("E-mail já cadastrado!");
        }
        Barbearia nova = barbeariaRepository.save(barbearia);
        return ResponseEntity.ok(nova);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO login) {
        if ("cliente".equalsIgnoreCase(login.getTipo())) {
            Optional<Cliente> cliente = clienteRepository.findByEmail(login.getEmail());
            if (cliente.isPresent() && cliente.get().getSenha().equals(login.getSenha())) {
                return ResponseEntity.ok(cliente.get());
            }
        } else if ("barbearia".equalsIgnoreCase(login.getTipo())) {
            Optional<Barbearia> barb = barbeariaRepository.findByEmail(login.getEmail());
            if (barb.isPresent() && barb.get().getSenha().equals(login.getSenha())) {
                return ResponseEntity.ok(barb.get());
            }
        }
        return ResponseEntity.status(401).body("Credenciais inválidas");
    }
}