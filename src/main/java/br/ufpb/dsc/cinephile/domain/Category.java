package br.ufpb.dsc.cinephile.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.roo.addon.json.RooJson;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson(deepSerialize = true)
public class Category {

    /**
     */
    @NotNull
    @Size(min = 2)
    private String name;

    /**
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Movie> movies = new HashSet<Movie>();
}
