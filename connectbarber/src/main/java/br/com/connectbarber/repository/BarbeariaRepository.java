package br.com.connectbarber.repository;

import br.com.connectbarber.model.Barbearia;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BarbeariaRepository extends JpaRepository<Barbearia, Long> {
    Optional<Barbearia> findByEmail(String email);
}