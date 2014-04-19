package br.ufpb.dsc.cinephile.domain;
import org.junit.Test;
import org.junit.Assert;
import org.springframework.roo.addon.test.RooIntegrationTest;

@RooIntegrationTest(entity = Movie.class)
public class MovieIntegrationTest {

    @Test
    public void testMarkerMethod() {
    }

    @Test
    public void testMovieAndCategoryRelationship(){
      Category category = new Category();
      category.setName("Movie test");

      Movie movie = new Movie();
      movie.setTitle("The Iron Man");
      movie.setBirthplace("EUA");
      movie.setReleaseYear(2014);
      movie.setSinopse("Very cool!!");
      movie.setStockQuantity(20);
      movie.setCoverPicture("");
      movie.setCategory(category);

      Assert.assertNotNull(movie.getCategory());
      Assert.assertEquals(category.getName(), movie.getCategory().getName());
    }
}
