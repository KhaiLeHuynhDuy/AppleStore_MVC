using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Apple.Domain.Repository.IRepository;
using Apple.Models.Models;
namespace Apple.Domain.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext _context;
        private readonly DbSet<T> _dbSet;

        public Repository(DbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _dbSet = _context.Set<T>();
        }

        public IQueryable<T> GetAll()
        {
            return _dbSet.AsQueryable();
        }

        public T Get(Expression<Func<T, bool>> predicate)
        {
            return _dbSet.FirstOrDefault(predicate)
              ?? throw new InvalidOperationException("Không tìm thấy thực thể.");
        }



        public async Task Add(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            await _dbSet.AddAsync(entity);
        }

        public void Update(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);

            _dbSet.Update(entity);

        }

        public void Delete(T entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            _dbSet.Remove(entity);
        }

        public void DeleteAll(IQueryable<T> entities)
        {
            ArgumentNullException.ThrowIfNull(entities);
            _dbSet.RemoveRange(entities);
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }
    }
}

