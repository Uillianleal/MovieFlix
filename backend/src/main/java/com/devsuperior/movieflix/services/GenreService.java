package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {

	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> list = genreRepository.findAll();
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		Optional<Genre> obj = genreRepository.findById(id);
		Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new GenreDTO(entity);
	}

}
