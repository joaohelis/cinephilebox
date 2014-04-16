package br.ufpb.dsc.cinephile.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.ManyToOne;
import org.springframework.roo.addon.json.RooJson;

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
}
