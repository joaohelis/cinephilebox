package br.ufpb.dsc.cinephile.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.ManyToOne;
import org.springframework.roo.addon.json.RooJson;

import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson(deepSerialize = true)
public class Movie {

    /**
     */
    @NotNull
    @Size(min = 2)
    private String title;

    /**
     */
    @NotNull
    @Size(min = 4)
    private String birthplace;

    /**
     */
    @NotNull
    private Integer releaseYear;

    /**
     */@NotNull
    @Size(min = 2, max = 5000)
    private String sinopse;

    /**
     */
    @NotNull
    private Integer stockQuantity;

    /**
     */
    @NotNull
    private String coverPicture;

    /**
     */
    @ManyToOne
    private Category category;

    public static Movie fromJsonToMovie(String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonFactory factory = objectMapper.getJsonFactory();

        

        try{
            JsonNode movieJSON = objectMapper.readTree(factory
                    .createJsonParser(json));

            Movie movie = new Movie();

            if (movieJSON.has("id")){
                movie.setId(movieJSON.get("id").asLong());
            }
            if (movieJSON.has("birthplace")){
                movie.setBirthplace(movieJSON.get("birthplace").asText());
            }
            if (movieJSON.has("coverPicture")){
                movie.setCoverPicture(movieJSON.get("coverPicture").asText());
            }
            if (movieJSON.has("releaseYear")){
                movie.setReleaseYear(movieJSON.get("releaseYear").asInt());
            }
            if (movieJSON.has("sinopse")){
                movie.setSinopse(movieJSON.get("sinopse").asText());
            }
            if (movieJSON.has("stockQuantity")){
                movie.setStockQuantity(movieJSON.get("stockQuantity").asInt());
            }
            if (movieJSON.has("title")){
                movie.setTitle(movieJSON.get("title").asText());
            }
            if (movieJSON.has("category")){
                Category category = Category.findCategory(movieJSON.get("category").asLong());
                movie.setCategory(category);
            }
            if (movieJSON.has("version")){
                movie.setVersion(movieJSON.get("version").asInt());
            }

            return movie;


        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
