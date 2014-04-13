package br.ufpb.dsc.cinephile.controller;
import br.ufpb.dsc.cinephile.domain.Movie;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RooWebJson(jsonObject = Movie.class)
@Controller
@RequestMapping("/movies")
public class MovieController {
}
