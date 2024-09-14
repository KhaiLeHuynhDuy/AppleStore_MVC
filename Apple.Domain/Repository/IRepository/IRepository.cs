using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Apple.Domain.Repository.IRepository
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        T Get(Expression<Func<T, bool>> predicate);
        Task Add(T entity); 
        void Update(T entity);
        void Delete(T entity);
        void DeleteAll(IQueryable<T> entity);
        Task Save(); 
    }
}
