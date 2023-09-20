package com.ixorasoftware.sims;

import com.ixorasoftware.sims.user.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SimsApplication {

	@Bean
	CommandLineRunner run(UserRepository userRepository,
						  RoleRepository roleRepository,
						  PermissionRepository permissionRepository)
	{
		return args -> {
			Permission p1 = new Permission("READ_STUDENT");
			Permission p2 = new Permission("WRITE_STUDENT");
			permissionRepository.save(p1);
			permissionRepository.save(p2);

			Role r1 = new Role("ROLE_ADMIN", List.of(p1, p2));
			roleRepository.save(r1);

			User u1 = new User("Jane", "Constance", "Doe",
							  "janedoe@gmail.com", Gender.FEMALE,"secret");

			userRepository.save(u1);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(SimsApplication.class, args);
	}

}
